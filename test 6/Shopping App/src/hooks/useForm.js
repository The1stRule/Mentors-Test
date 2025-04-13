const useForm = () => {
    const handleSubmit = (e, func, setIsError, navigation) => {
        e.preventDefault();

        const formData = {};

        for(const [key, value] of new FormData(e.target)) {
            formData[key] = value;
        }

        console.log(formData);
        
        func(e.target, formData, setIsError, navigation);
    }

    return handleSubmit;
}

export { useForm };