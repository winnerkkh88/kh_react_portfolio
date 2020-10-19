import React, { useEffect } from "react";
import MembershipManagement from "../../../components/portfolio/MembershipManagement/MembershipManagement";
import {
    useAddMemberFormInputs,
    useImageUpload,
} from "../../../lib/useAddMemberFormInputs";
import { useSelector, useDispatch } from "react-redux";
import { getMembershipList } from "../../../modules/membership";
import CircularProgress from "@material-ui/core/CircularProgress";

function MembershipManagementContainer() {
    const { data, loading, error } = useSelector(
        (state) => state.membership.membership
    );
    const dispatch = useDispatch();
    const [inputs, onChange, onReset] = useAddMemberFormInputs({
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

    const [imageUpload, onFileChange, onFileReset] = useImageUpload({
        file: null,
        fileName: "",
    });

    useEffect(() => {
        dispatch(getMembershipList());
    }, [dispatch]);

    if (loading && !data)
        return (
            <div className="data-handling-sentence">
                <CircularProgress />
            </div>
        );

    if (error)
        return (
            <div className="data-handling-sentence">
                HTTP Communication Error!
            </div>
        );
    if (!data) return null;

    return (
        <>
            <MembershipManagement
                membershipList={data.data}
                inputs={inputs}
                onChange={onChange}
                onReset={onReset}
                imageUpload={imageUpload}
                onFileChange={onFileChange}
                onFileReset={onFileReset}
            />
        </>
    );
}

export default MembershipManagementContainer;
