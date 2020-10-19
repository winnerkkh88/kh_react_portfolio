import { useCallback, useState } from "react";

function useEmailFormInputs(initialInputs) {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        feedback: "",
    });

    // change
    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        setInputs((inputs) => ({ ...inputs, [name]: value }));
    }, []);

    // reset
    const onReset = useCallback(
        () => setInputs({ name: "", email: "", feedback: "" }),
        // eslint-disable-next-line
        [initialInputs]
    );

    return [inputs, onChange, onReset];
}

export default useEmailFormInputs;
