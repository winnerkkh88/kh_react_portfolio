import React, { useState } from "react";
import SortingColumns, { getComparator, stableSort } from "./SortingColumns";
import avatar from "../../../css/other/avatar.png";
import {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    TablePagination,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        minWidth: 1150,
    },
    paper: {
        marginLeft: 18,
        marginRight: 18,
    },

    grow: {
        flexGrow: 1,
    },
    tableHead: {
        fontSize: "20px",
        fontFamily: " 'ABeeZee', sans-serif",
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    tableRow: {
        "&:hover": {
            backgroundColor: "#f2f2f2 !important",
            cursor: "pointer",
        },
    },
}));

export default function MemberList({
    columnList,
    membershipList,
    searchKeyword,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
}) {
    const [order, setOrder] = useState("asc");
    const [orderBy, setOrderBy] = useState("firstName");
    const history = useHistory();
    const classes = useStyles();

    const handleChangePage = (e, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(e.target.value);
        setPage(0);
    };

    return (
        <>
            <Paper className={classes.paper}>
                <TableContainer component={Paper}>
                    <div className={classes.root}>
                        <Table className={classes.table}>
                            <SortingColumns
                                order={order}
                                setOrder={setOrder}
                                orderBy={orderBy}
                                setOrderBy={setOrderBy}
                                columnList={columnList}
                            />

                            <TableBody>
                                {stableSort(
                                    membershipList,
                                    getComparator(order, orderBy)
                                )
                                    .filter(
                                        (data) =>
                                            (data.firstName + data.lastName)
                                                .toLowerCase()
                                                .indexOf(
                                                    searchKeyword.toLowerCase()
                                                ) > -1
                                    )
                                    .slice(
                                        page * rowsPerPage,
                                        page * rowsPerPage + rowsPerPage
                                    )
                                    .map((memberInfo, index) => (
                                        <TableRow
                                            className={classes.tableRow}
                                            key={memberInfo.id}
                                            onClick={() => {
                                                return history.push({
                                                    pathname: `/memberDetail/${memberInfo.id}`,
                                                    state: {
                                                        detail: memberInfo,
                                                    },
                                                });
                                            }}
                                        >
                                            <TableCell
                                                component="th"
                                                scope="row"
                                            >
                                                {index + 1}
                                            </TableCell>

                                            <TableCell align="left" scope="row">
                                                <img
                                                    src={
                                                        memberInfo.picture ||
                                                        avatar
                                                    }
                                                    alt=""
                                                    width="50"
                                                    height="50"
                                                />
                                            </TableCell>

                                            <TableCell align="left" scope="row">
                                                {`${memberInfo.firstName} ${memberInfo.lastName}`}
                                            </TableCell>

                                            <TableCell align="left" scope="row">
                                                {memberInfo.birthday}
                                            </TableCell>

                                            <TableCell align="left" scope="row">
                                                {memberInfo.gender}
                                            </TableCell>

                                            <TableCell align="left" scope="row">
                                                {memberInfo.job}
                                            </TableCell>

                                            <TableCell align="left" scope="row">
                                                {memberInfo.country}
                                            </TableCell>

                                            <TableCell align="left" scope="row">
                                                {memberInfo.regDate}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </div>
                </TableContainer>

                <div>
                    <TablePagination
                        style={{ marginBottom: "80px" }}
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={membershipList.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </div>
            </Paper>
        </>
    );
}
