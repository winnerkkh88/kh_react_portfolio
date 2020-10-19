import React, { useState } from "react";
import { addMemberInfo } from "../../../../api/membership";
import { confirmAlert } from "react-confirm-alert";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import "react-confirm-alert/src/react-confirm-alert.css";
// prettier-ignore
import {Dialog, DialogActions, DialogTitle, DialogContent, Button, makeStyles, TextareaAutosize, MenuItem, LinearProgress } from "@material-ui/core";

const optionList = {
    gender: [
        {
            value: "Male",
            label: "Male",
        },
        {
            value: "Female",
            label: "Female",
        },
    ],
};

const useStyles = makeStyles((theme) => ({
    menu: {
        marginTop: "20px",
        marginBottom: "20px",
        marginRight: "60px",
        display: "flex",
        paddingLeft: "0px",
        paddingRight: "0px",
        width: "150px",
        fontWeight: "bold",
    },
    textFieldWidth: {
        width: "300px",
        marginTop: "-20px",
    },
    hidden: {
        display: "none",
    },
    title: { textAlign: "center", marginBottom: "0px", paddingBottom: "0px" },
    textArea: {
        width: "300px",
        height: "100px !important",
    },
    elementAlign: {
        display: "flex !important",
        alignItems: "center !important",
        justifyContent: "center !important",
    },
    buttonStyle: { fontWeight: "bold", width: "100px" },
    progressBarL: {
        height: "30px",
    },
}));

function AddMember({
    inputs,
    onChange,
    onReset,
    imageUpload,
    onFileChange,
    onFileReset,
}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [disableClose, setDisableClose] = useState(false);

    // prettier-ignore
    const {firstName, lastName, birthday, gender, email, phoneNumber, job, city, country, comment} = inputs;
    const { file, fileName } = imageUpload;
    const onClickOpen = () => {
        setOpen(true);
    };

    // prettier-ignore
    const onClose = () => {
        setOpen(false);
        if (file || fileName || firstName || lastName || birthday || gender || email || phoneNumber|| job || city || country || comment) {    
            confirmAlert({
                title: "Confirm",
                message: "Are you really sure to close?",
                buttons: [
                    {
                        label: "Yes",
                        onClick: () => {
                            onReset();
                            onFileReset();
                        },
                    },
                    {
                        label: "No",
                        onClick: () => {
                            setOpen(true);
                            onFileReset();
                        },
                    },
                ],
                closeOnEscape: true,
                closeOnClickOutside: false
            });
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setDisableClose(true);
        setSubmit(true);
        addMemberInfo(inputs, imageUpload);
    };

    return (
        <>
            <Button
                className={classes.menu}
                variant="outlined"
                color="primary"
                onClick={onClickOpen}
            >
                ADD MEMBER
            </Button>
            <Dialog open={open}>
                <DialogTitle className={classes.title}>
                    ADD NEW MEMBER
                </DialogTitle>
                <ValidatorForm onSubmit={onSubmit}>
                    <DialogContent>
                        <input
                            className={classes.hidden}
                            accept="image/*"
                            id="raised-button-file"
                            type="file"
                            file={file}
                            value={fileName}
                            onChange={onFileChange}
                        />
                        <br />
                        <label htmlFor="raised-button-file">
                            <Button
                                className={classes.textFieldWidth}
                                style={{
                                    marginBottom: "20px",
                                }}
                                variant="contained"
                                color="primary"
                                component="span"
                                name="file"
                            >
                                {fileName === ""
                                    ? "Select Profile Image"
                                    : fileName}
                            </Button>
                        </label>
                        <br />

                        <TextValidator
                            className={classes.textFieldWidth}
                            label="First Name"
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={onChange}
                            validators={["required"]}
                            errorMessages={["First Name Field is required"]}
                        />
                        <br />
                        <TextValidator
                            className={classes.textFieldWidth}
                            label="Last Name"
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={onChange}
                            validators={["required"]}
                            errorMessages={["Last Name Field is required"]}
                        />
                        <br />
                        <TextValidator
                            className={classes.textFieldWidth}
                            id="date"
                            label="Date of Birth"
                            type="date"
                            name="birthday"
                            value={birthday}
                            onChange={onChange}
                            validators={["required"]}
                            errorMessages={["Birthday is required"]}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <br />
                        <TextValidator
                            className={classes.textFieldWidth}
                            select
                            label="Gender"
                            type="text"
                            name="gender"
                            value={gender}
                            onChange={onChange}
                            validators={["required"]}
                            errorMessages={["Gender Field is required"]}
                        >
                            {optionList.gender.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextValidator>
                        <br />
                        <TextValidator
                            className={classes.textFieldWidth}
                            label="Email Address"
                            type="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            validators={["required", "isEmail"]}
                            errorMessages={[
                                "Email is required",
                                "Email is not valid",
                            ]}
                        />
                        <br />
                        <TextValidator
                            className={classes.textFieldWidth}
                            label="Phone Number"
                            type="tel"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={onChange}
                            validators={["required"]}
                            errorMessages={["Phone Number Field is required"]}
                        />
                        <br />
                        <TextValidator
                            className={classes.textFieldWidth}
                            label="Job"
                            type="text"
                            name="job"
                            value={job}
                            onChange={onChange}
                            validators={["required"]}
                            errorMessages={["Job Field is required"]}
                        />
                        <br />
                        <TextValidator
                            className={classes.textFieldWidth}
                            label="City"
                            type="text"
                            name="city"
                            value={city}
                            onChange={onChange}
                            validators={["required"]}
                            errorMessages={["City Field is required"]}
                        />
                        <br />
                        <TextValidator
                            className={classes.textFieldWidth}
                            label="Nationality"
                            type="text"
                            name="country"
                            value={country}
                            onChange={onChange}
                            validators={["required"]}
                            errorMessages={["Nationality Field is required"]}
                        />
                        <br />

                        <TextareaAutosize
                            className={classes.textArea}
                            rows="5"
                            aria-label="maximum height"
                            placeholder="Comment"
                            name="comment"
                            value={comment}
                            onChange={onChange}
                        />
                        <br />
                    </DialogContent>

                    {disableClose && <LinearProgress color="secondary" />}

                    <DialogActions className={classes.elementAlign}>
                        <Button
                            className={classes.buttonStyle}
                            variant="outlined"
                            color="primary"
                            type="submit"
                            disabled={submit}
                        >
                            Register
                        </Button>

                        <Button
                            className={classes.buttonStyle}
                            variant="outlined"
                            color="primary"
                            disabled={disableClose}
                            onClick={onClose}
                        >
                            Close
                        </Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        </>
    );
}

export default AddMember;
