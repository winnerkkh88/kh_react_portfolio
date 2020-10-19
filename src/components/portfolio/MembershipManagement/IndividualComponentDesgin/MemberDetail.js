import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useState } from "react";
// prettier-ignore
import {useUpdateMemberFormInputs, useImageUpload } from "../../../../lib/useAddMemberFormInputs";
import { confirmAlert } from "react-confirm-alert";
import { deleteMember, updateMemberInfo } from "../../../../api/membership";
import { LinearProgress, Button } from "@material-ui/core";
import avatar from "../../../css/other/avatar.png";

export default function MemberDetail() {
    const location = useLocation();
    const memberStates = location.state.detail;
    const history = useHistory();
    const [isDisabled, setIsDisabled] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    // prettier-ignore
    const [inputs, onChange, revertOriginalValues] = useUpdateMemberFormInputs({initialInputs: location.state.detail});
    // prettier-ignore
    const [imageUpload, onFileChange, onFileReset] = useImageUpload({file: null, fileName: "",});
    // prettier-ignore
    const {id, picture, firstName, lastName, birthday, gender, email, phoneNumber, job, city, country} = inputs;
    const { file, fileName } = imageUpload;

    const [formInputs, setFormInputs] = useState({
        formFirstName: memberStates.firstName,
        formLastName: memberStates.lastName,
        formBirthday: memberStates.birthday,
        formGender: memberStates.gender,
        formEmail: memberStates.email,
        formPhoneNumber: memberStates.phoneNumber,
        formJob: memberStates.job,
        formCity: memberStates.city,
        formCountry: memberStates.country,
        formComment: memberStates.comment,
    });
    // prettier-ignore
    const {formFirstName, formLastName, formBirthday, formGender, formEmail, formPhoneNumber, formJob, formCity, formCountry, formComment} = formInputs

    const changeFormValue = (e) => {
        const { value, name } = e.target;
        setFormInputs({
            ...formInputs,
            ["form" + name.charAt(0).toUpperCase() + name.slice(1)]: value,
        });
    };

    const revertFormValue = () => {
        setFormInputs({
            ...formInputs,
            formFirstName: memberStates.firstName,
            formLastName: memberStates.lastName,
            formBirthday: memberStates.birthday,
            formGender: memberStates.gender,
            formEmail: memberStates.email,
            formPhoneNumber: memberStates.phoneNumber,
            formJob: memberStates.job,
            formCity: memberStates.city,
            formCountry: memberStates.country,
            formComment: memberStates.comment,
        });
        revertOriginalValues();
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const fieldNames = [
            "First Name",
            "Last Name",
            "D.O.B",
            "Gender",
            "Email",
            "Phone Number",
            "Job",
            "City",
            "Country",
        ];
        if (firstName === "") {
            alert(fieldNames[0] + " Field is required");
        } else if (lastName === "") {
            alert(fieldNames[1] + " Field is required");
        } else if (birthday === "") {
            alert(fieldNames[2] + " Field is required");
        } else if (gender === "") {
            alert(fieldNames[3] + " Field is required");
        } else if (email === "") {
            alert(fieldNames[4] + " Field is required");
        } else if (phoneNumber === "") {
            alert(fieldNames[5] + " Field is required");
        } else if (job === "") {
            alert(fieldNames[6] + " Field is required");
        } else if (city === "") {
            alert(fieldNames[7] + " Field is required");
        } else if (country === "") {
            alert(fieldNames[8] + " Field is required");
        } else {
            confirmAlert({
                title: "Update Confirm",
                message: "Are you really sure to update member information?",
                buttons: [
                    {
                        label: "Yes",
                        onClick: async () => {
                            setIsLoading(true);
                            await updateMemberInfo(inputs, imageUpload)
                                .then(() => {
                                    history.goBack(-1);
                                })
                                .catch(() => {
                                    throw new Error("Member Update Error");
                                });
                        },
                    },
                    {
                        label: "No",
                        onClick: () => {
                            return false;
                        },
                    },
                ],
                closeOnEscape: true,
                closeOnClickOutside: false,
            });
        }
    };

    const onDelete = () => {
        confirmAlert({
            title: "Delete Confirm",
            message: "Are you really sure to delete member information?",
            buttons: [
                {
                    label: "Yes",
                    onClick: async () => {
                        setIsLoading(true);
                        await deleteMember(
                            { id: id },
                            `${memberStates.firstName} ${memberStates.lastName}`
                        )
                            .then(() => {
                                history.goBack(-1);
                            })
                            .catch(() => {
                                throw new Error("Member Delete Error");
                            });
                    },
                },
                {
                    label: "No",
                    onClick: () => {
                        return false;
                    },
                },
            ],
            closeOnEscape: true,
            closeOnClickOutside: false,
        });
    };

    return (
        <>
            <div
                className="container bootstrap snippet"
                style={{ marginBottom: "100px" }}
            >
                <div className="row detail">
                    <div className="col-sm-12 text-center">Member Detail</div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 text-center justify-content-center">
                        <img
                            src={picture || avatar}
                            className="img-thumbnail"
                            alt=""
                            width="250"
                            style={{ borderRadius: "50%", margin: "20px" }}
                        />

                        {isDisabled === false && (
                            <>
                                <div style={{ marginBottom: "5px" }}>
                                    Upload a different photo...
                                </div>
                                <input
                                    className="text-center center-block file-upload"
                                    accept="image/*"
                                    id="raised-button-file"
                                    type="file"
                                    file={file}
                                    value={fileName}
                                    onChange={onFileChange}
                                    hidden
                                />
                                <label htmlFor="raised-button-file">
                                    <Button
                                        style={{
                                            marginBottom: "5px",
                                        }}
                                        id="raised-button-file"
                                        variant="contained"
                                        component="span"
                                        name="file"
                                    >
                                        {fileName === ""
                                            ? "Select Profile Image"
                                            : fileName}
                                    </Button>
                                </label>
                            </>
                        )}
                        <hr />
                        <Button
                            onClick={() => {
                                revertFormValue();
                                setIsDisabled(!isDisabled);
                                onFileReset();
                            }}
                            variant="contained"
                            component="span"
                            style={{
                                marginTop: "20px",
                                marginBottom: "20px",
                                fontWeight: "bold",
                            }}
                        >
                            {isDisabled
                                ? "Edit Member Info"
                                : "Cancel Edit Member Info"}
                        </Button>
                    </div>
                    <div className="col-sm-8">
                        {isDisabled === false && (
                            <div className="form-group">
                                <div className="d-flex justify-content-center">
                                    <br />
                                    <Button
                                        type="submit"
                                        disabled={isLoading}
                                        onClick={onSubmit}
                                        style={{
                                            borderRadius: 10,
                                            fontSize: "20px",
                                            marginRight: "20px",
                                            width: "100px",
                                        }}
                                        color="primary"
                                        variant="contained"
                                    >
                                        UPDATE
                                    </Button>
                                    <Button
                                        className="delete-button"
                                        onClick={onDelete}
                                        disabled={isLoading}
                                        style={{
                                            borderRadius: 10,
                                            fontSize: "20px",
                                            width: "100px",
                                        }}
                                        color="secondary"
                                        variant="contained"
                                    >
                                        DELETE
                                    </Button>
                                </div>
                            </div>
                        )}
                        {isLoading && <LinearProgress color="secondary" />}
                        <div className="form-group">
                            <label htmlFor="firstName">
                                <h4>First Name</h4>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                name="firstName"
                                placeholder="Enter First Name"
                                value={formFirstName}
                                onChange={(e) => {
                                    onChange(e);
                                    changeFormValue(e);
                                }}
                                disabled={isDisabled}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">
                                <h4>Last Name</h4>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                name="lastName"
                                placeholder="Enter Last Name"
                                value={formLastName}
                                onChange={(e) => {
                                    onChange(e);
                                    changeFormValue(e);
                                }}
                                disabled={isDisabled}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="birthday">
                                <h4>Date of Birth</h4>
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="birthday"
                                name="birthday"
                                placeholder="Enter Date of Birth"
                                value={formBirthday}
                                onChange={(e) => {
                                    onChange(e);
                                    changeFormValue(e);
                                }}
                                disabled={isDisabled}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">
                                <h4>Gender</h4>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="gender"
                                name="gender"
                                placeholder="Select Gender"
                                value={formGender}
                                onChange={(e) => {
                                    onChange(e);
                                    changeFormValue(e);
                                }}
                                disabled={isDisabled}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">
                                <h4>Email</h4>
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Enter Email"
                                value={formEmail}
                                onChange={(e) => {
                                    onChange(e);
                                    changeFormValue(e);
                                }}
                                disabled={isDisabled}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">
                                <h4>Phone Number</h4>
                            </label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phoneNumber"
                                name="phoneNumber"
                                placeholder="Enter Phone Number"
                                value={formPhoneNumber}
                                onChange={(e) => {
                                    onChange(e);
                                    changeFormValue(e);
                                }}
                                disabled={isDisabled}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="job">
                                <h4>Job</h4>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="job"
                                name="job"
                                placeholder="Enter Job"
                                value={formJob}
                                onChange={(e) => {
                                    onChange(e);
                                    changeFormValue(e);
                                }}
                                disabled={isDisabled}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">
                                <h4>City</h4>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="city"
                                name="city"
                                placeholder="Enter City"
                                value={formCity}
                                onChange={(e) => {
                                    onChange(e);
                                    changeFormValue(e);
                                }}
                                disabled={isDisabled}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="country">
                                <h4>Nationality</h4>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="country"
                                name="country"
                                placeholder="Enter Nationality"
                                value={formCountry}
                                onChange={(e) => {
                                    onChange(e);
                                    changeFormValue(e);
                                }}
                                disabled={isDisabled}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="regDate">
                                <h4>Registered Date</h4>
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="regDate"
                                name="regDate"
                                placeholder="Select Registered date"
                                value={memberStates.regDate}
                                disabled={true}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="comment">
                                <h4>Comment</h4>
                            </label>
                            <textarea
                                className="form-control"
                                name="comment"
                                id="comment"
                                rows="5"
                                aria-label="maximum height"
                                placeholder="Enter Comment"
                                value={formComment}
                                onChange={(e) => {
                                    onChange(e);
                                    changeFormValue(e);
                                }}
                                disabled={isDisabled}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
