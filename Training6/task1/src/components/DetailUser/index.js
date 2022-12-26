import React from "react";

const DetailUser = ({ userInfo }) => {
    return (
        <>
            <div className="flex flex-col p-10">
                {userInfo ? (
                    <>
                        <span>fullName: '{userInfo?.fullName}',</span>
                        <span>email: '{userInfo?.email}',</span>
                        <span>password: '{userInfo?.password}',</span>
                        <span>id: '{userInfo?.id}',</span>
                        <span>role: '{userInfo?.role}',</span>
                    </>
                ) : (
                    <span>Please choose user to view user detail</span>
                )}
            </div>
        </>
    );
};

export default DetailUser;
