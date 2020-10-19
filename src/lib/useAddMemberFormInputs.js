import { useState, useCallback } from "react";

export function useAddMemberFormInputs(initialInputs) {
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        birthday: "",
        gender: "",
        email: "",
        phoneNumber: "",
        job: "",
        city: "",
        country: "",
        comment: "",
    });

    // change
    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        setInputs((inputs) => ({ ...inputs, [name]: value }));
    }, []);

    // reset
    const onReset = useCallback(
        () =>
            setInputs({
                firstName: "",
                lastName: "",
                birthday: "",
                gender: "",
                email: "",
                phoneNumber: "",
                job: "",
                city: "",
                country: "",
                comment: "",
            }),
        // eslint-disable-next-line
        [initialInputs]
    );

    return [inputs, onChange, onReset];
}

export function useUpdateMemberFormInputs({ initialInputs }) {
    const [inputs, setInputs] = useState({
        firstName: initialInputs.firstName,
        lastName: initialInputs.lastName,
        birthday: initialInputs.birthday,
        gender: initialInputs.gender,
        email: initialInputs.email,
        phoneNumber: initialInputs.phoneNumber,
        job: initialInputs.job,
        city: initialInputs.city,
        country: initialInputs.country,
        comment: initialInputs.comment,
        id: initialInputs.id,
        picture: initialInputs.picture,
        regDate: initialInputs.regDate,
    });

    // change
    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        setInputs((inputs) => ({ ...inputs, [name]: value }));
    }, []);

    const revertOriginalValues = useCallback(() => {
        setInputs((inputs) => ({
            ...inputs,
            firstName: initialInputs.firstName,
            lastName: initialInputs.lastName,
            birthday: initialInputs.birthday,
            gender: initialInputs.gender,
            email: initialInputs.email,
            phoneNumber: initialInputs.phoneNumber,
            job: initialInputs.job,
            city: initialInputs.city,
            country: initialInputs.country,
            comment: initialInputs.comment,
            id: initialInputs.id,
            picture: initialInputs.picture,
            regDate: initialInputs.regDate,
        }));
    }, [initialInputs]);

    return [inputs, onChange, revertOriginalValues];
}

export function useImageUpload(initialImageInfo) {
    const [imageUpload, setImageUpload] = useState({
        file: null,
        fileName: "",
    });

    // change
    const onFileChange = useCallback((e) => {
        setImageUpload((imageInfo) => ({
            ...imageInfo,
            file: e.target.files[0],
            // prettier-ignore
            "fileName":  e.target.value
        }));
    }, []);

    // file reset
    const onFileReset = useCallback(
        () =>
            setImageUpload({
                file: null,
                fileName: "",
            }),
        // eslint-disable-next-line
        [initialImageInfo]
    );

    return [imageUpload, onFileChange, onFileReset];
}
