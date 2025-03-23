const useForm = () => {
    const handleSubmit = (e, func, navigate, setIsError) => {
        e.preventDefault();
        
        const formData = {};

        for(const [key, value] of new FormData(e.target).entries()) {
            formData[key] = value;
        }

        func(formData, e.target, navigate, setIsError);
    }

    return [handleSubmit];
}

export { useForm };