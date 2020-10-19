import React from "react";
import {
    makeStyles,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    tableHead: {
        fontSize: "20px",
        fontFamily: " 'ABeeZee', sans-serif",
    },

    visuallyHidden: {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: 1,
        margin: -1,
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        top: 20,
        width: 1,
    },
    padding: {
        padding: 0,
    },
}));

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

export function getComparator(order, orderBy) {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

// prettier-ignore
export default function SortingColumns({order, setOrder, orderBy,setOrderBy, columnList}) {
    const classes = useStyles();
    const createSortHandler = (property) => (event) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };
    
    return (
        <TableHead>
            <TableRow>
                {columnList.map((column) => (
                    <TableCell
                        className={classes.tableHead}
                        key={column.id}
                        sortDirection={orderBy === column.id ? order : false}
                    >
                        <TableSortLabel
                            className={classes.padding}
                            active={orderBy === column.id}
                            direction={orderBy === column.id ? order : "asc"}
                            onClick={createSortHandler(column.id)}
                        >
                            {column.label}
                            {orderBy === column.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === "desc"
                                        ? "sorted descending"
                                        : "sorted ascending"}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
