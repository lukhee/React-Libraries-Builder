import React, { useState } from 'react';
import LoginForm from './loginForm';
import axios from 'axios';
import FileList from './fileList';

const FileUpload = () => {
    const [userFiles, setUserfile] = useState(null)
    const [fileUpload, setFileUpload] = useState({
        file: null,
        src: null,
    });
    const [loginInfo, setLogin] = useState({
        loading: true,
        login: true,
        userInfo: '',
        errorMessage: '',
    });

    const onFileChangeHandler = (e) => {
        const file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = function (event) {
            setFileUpload({
                ...fileUpload,
                src: event.target.result,
                file: file,
            });
        };
        reader.readAsDataURL(file);
    };

    const uploadFileHandler = async () => {
        const config = {
            'Content-Type': 'application/json',
        };
        const updatedFile = [...loginInfo.userInfo.fileUploaded, fileUpload];
        const body = {
            ...loginInfo.userInfo,
            fileUploaded: updatedFile,
        };
        try {
            const result = await axios.put(
                `http://localhost:3004/usersData/${loginInfo.userInfo.id}`,
                body,
                config
            );

            setLogin({
                ...loginInfo,
                userInfo: result.data,
                login: true,
            });
        } catch (error) {
            console.log(error);
        }
    };

    const onSubmitForm = async (formData) => {
        try {
        const result = await axios.get('http://localhost:3004/usersData');
        const findUser = result.data.find(
            (user) => user.username === formData.username
        );
        if (!findUser) {
            return alert('User Not found, please try again');
        }
        setLogin({
            ...loginInfo,
            userInfo: findUser,
            login: true,
        });
        } catch (error) {
        console.log(error);
        }
    };

    return (
        <div>
        {!loginInfo.login ? (
            <LoginForm submitForm={onSubmitForm} />
        ) : (
            <div>
            <h4> File Upload for {loginInfo.userInfo.username} </h4>
            <div>
                <input
                    type='file'
                    className='d-block mb-2'
                    onChange={(e) => onFileChangeHandler(e)}
                />
                <button
                    className='btn btn-primary btn-sm rounded-0'
                    onClick={uploadFileHandler}
                    >
                {' '}
                Send{' '}
                </button>
                <p> File Preview </p>
                {fileUpload.src != null ? (
                    <div>
                        <img src={fileUpload.src} alt='file upload here' width='60' />
                        <p> File Name : {fileUpload.file.name} </p>
                        <p>
                        {' '}
                        Uploaded Date :{' '}
                        {fileUpload.file.lastModifiedDate.toDateString()}{' '}
                        </p>
                    </div>
                    ) : (
                    <p> No file uploaded yet </p>
                )}
            </div>
            <FileList list={loginInfo.userInfo.fileUploaded} />
            </div>
        )}
        </div>
    );
};

export default FileUpload;
