import React, { useState } from "react";
import AddMember from "./AddMember";
import { makeStyles, FormControlLabel, Switch } from "@material-ui/core";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
    menu: {
        marginTop: "20px",
        marginBottom: "20px",
        marginRight: "60px",
        display: "absolute",
        paddingLeft: "0px",
        paddingRight: "0px",
        width: "150px",
    },
    number: {
        fontFamily: "Arial, Helvetica, sans-serif",
        marginTop: "10px",
        marginBottom: "-10px",
        fontSize: "20px",
    },
    elementAlign: {
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "15px",
    },
}));

export default function DisplayHead({
    totalMembers,
    inputs,
    onChange,
    onReset,
    imageUpload,
    onFileChange,
    onFileReset,
}) {
    const [hidden, setHidden] = useState(false);
    const classes = useStyles();

    const handleHiddenChange = (event) => {
        if (event.target.checked === true) {
            document.getElementById("mainNav").style.display = "none";
            document.getElementById("root").style.marginTop = "-56px";
        } else {
            document.getElementById("mainNav").style.display = "flex";
            document.getElementById("root").style.marginTop = "56px";
        }

        setHidden(event.target.checked);
    };

    useEffect(() => {
        return () => {
            // document.getElementById("mainNav").id = "asdadsq";
            // document.getElementById("mainNav").style.display = "flex";
            // document.getElementById("root").style.marginTop = "56px";
        };
    });

    return (
        <>
            <div
                className="container"
                style={{ position: "relative", marginLeft: "0px" }}
            >
                <div className={classes.number}>
                    Total Members: {totalMembers}
                </div>
                <div className="row">
                    <div className={classes.elementAlign}>
                        <AddMember
                            inputs={inputs}
                            onChange={onChange}
                            onReset={onReset}
                            imageUpload={imageUpload}
                            onFileChange={onFileChange}
                            onFileReset={onFileReset}
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={hidden}
                                    onChange={handleHiddenChange}
                                    color="primary"
                                />
                            }
                            label="Hide Main Nav"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
