import axios from "axios";
import { sleep } from "./experiences";
import hash from "object-hash";
import * as firebase from "firebase/app";
import "firebase/storage";
import firebaseSDK from "./firebaseSDK.json";

//Getting the all members' information
export async function getMembershipList() {
    await sleep(500); // wait for 0.5 seconds

    return await axios
        .get("https://us-central1-node-kh.cloudfunctions.net/app/membership")
        .then((response) => {
            return response;
        })
        .catch(() => {
            throw new Error("Http Communication Error(getmembershipList)");
        });
}

//function for updating only member's info without image
const uploadMemberInfoOnly = async (memberInfo) => {
    return await axios({
        method: "POST",
        url: "https://us-central1-node-kh.cloudfunctions.net/app/membership",
        data: { memberInfo },
    })
        .then((response) => {
            alert("New Member Information Added");
            window.location.reload(true);
        })
        .catch(() => {
            alert("Please try again!\nSorry for the inconvenience :(");
            throw new Error("Http Communication Error(addMemberInfo)");
        });
};

const updateMemberInfoOnly = async (updatedInfo) => {
    return await axios({
        method: "PUT",
        url: "https://us-central1-node-kh.cloudfunctions.net/app/membership",
        data: { updatedInfo },
    })
        .then((response) => {
            alert("Information Updated");
        })
        .catch(() => {
            alert("Please try again!\nSorry for the inconvenience :(");
            throw new Error("Http Communication Error(addMemberInfo)");
        });
};

// prettier-ignore
export async function addMemberInfo(memberInfo, imageUpload) {
    const fullDate = new Date();
    const month = ('0' + (fullDate.getMonth()+1)).slice(-2);
    const date = ('0' + fullDate.getDate()).slice(-2);
    const today = `${fullDate.getFullYear()}-${month}-${date}`;
    const isImageUpload = imageUpload.file !== null ? true : false;
    memberInfo.regDate = today;
    memberInfo.id = hash.sha1(memberInfo.firstName + memberInfo.phoneNumber + memberInfo.lastName + memberInfo.regDate + today );


    if (isImageUpload) {
        //Tried here for image upload instead of writing code in Node.js server
        const app = firebase.initializeApp(firebaseSDK);
        const storageRef = app
            .storage()
            .ref(`profileImages/${memberInfo.id}`)
            .child(imageUpload.file.name);
        const fileRef = storageRef;
        const metadata = {
            contentType: imageUpload.file.type,
        };

        //File upload and get the URL for the file
        return await fileRef.put(imageUpload.file, metadata).then(() => {
            storageRef
                .getDownloadURL()
                .then((url) => {
                    memberInfo.picture = url;
                })
                .then(() => {
                    //Register member infomation
                    uploadMemberInfoOnly(memberInfo);
                });
        });
    } else {
        //Register member infomation
        return uploadMemberInfoOnly(memberInfo);
    }
}

export async function updateMemberInfo(updatedInfo, updatedImage) {
    const isImageUpload = updatedImage.file !== null ? true : false;

    if (isImageUpload) {
        //Tried here for image upload instead of writing code in Node.js server
        const app = firebase.initializeApp(firebaseSDK);
        const storageRef = app
            .storage()
            .ref(`profileImages/${updatedInfo.id}`)
            .child(updatedImage.file.name);
        const fileRef = storageRef;
        const metadata = {
            contentType: updatedImage.file.type,
        };
        //File upload and get the URL for the file
        await fileRef.put(updatedImage.file, metadata).then(() => {
            storageRef
                .getDownloadURL()
                .then((url) => {
                    updatedInfo.picture = url;
                })
                .then(() => {
                    //Update member infomation
                    updateMemberInfoOnly(updatedInfo);
                });
        });
    } else {
        return updateMemberInfoOnly(updatedInfo);
    }
}

export async function deleteMember(key, name) {
    return await axios({
        method: "DELETE",
        url: "https://us-central1-node-kh.cloudfunctions.net/app/membership",
        data: { key },
    })
        .then((response) => {
            alert(`${name} has been deleted on the list`);
        })
        .catch(() => {
            alert("Please try again!\nSorry for the inconvenience :(");
            throw new Error("Http Communication Error(Delete Member)");
        });
}
