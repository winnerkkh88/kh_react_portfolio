import React, { useState, useEffect } from "react";
import "../../css/MembershipManagement.css";
import AppBarComponent from "./IndividualComponentDesgin/AppBarComponent";
import DisplayHead from "./IndividualComponentDesgin/DisplayHead";
import MemberList from "./IndividualComponentDesgin/MemberList";

export default function MembershipManagement({
    membershipList,
    inputs,
    onChange,
    onReset,
    imageUpload,
    onFileChange,
    onFileReset,
}) {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const columnList = [
        { id: "id", label: "No." },
        { id: "picture", label: "Profile Image" },
        { id: "firstName", label: "Full Name" },
        { id: "birthday", label: "D.O.B" },
        { id: "gender", label: "Gender" },
        { id: "job", label: "Job" },
        { id: "country", label: "Nationality" },
        { id: "regDate", label: "Reg Date" },
    ];

    useEffect(() => {
        window.scroll(0, 0);
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <AppBarComponent
                searchKeyword={searchKeyword}
                setSearchKeyword={setSearchKeyword}
                setPage={setPage}
                setRowsPerPage={setRowsPerPage}
            />
            <DisplayHead
                totalMembers={membershipList.length}
                inputs={inputs}
                onChange={onChange}
                onReset={onReset}
                imageUpload={imageUpload}
                onFileChange={onFileChange}
                onFileReset={onFileReset}
            />
            <div className="animated fadeInDownBig">
                <MemberList
                    columnList={columnList}
                    membershipList={membershipList}
                    searchKeyword={searchKeyword}
                    page={page}
                    setPage={setPage}
                    rowsPerPage={rowsPerPage}
                    setRowsPerPage={setRowsPerPage}
                />
            </div>
        </>
    );
}
