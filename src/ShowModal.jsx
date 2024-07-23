import React from "react";

const MyModal = ({ closeApp, openSuccessModal }) => {
    return (
        <>
            <div className="flex w-1/2 h-1/2 flex-col items-center justify-center fixed bg-background text-foreground  border-2 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
                <p className="text-lg  text-primary mb-4 text-blue-600 font-bold">You are submitting a <br></br>fund issuance request</p>
                <button className="border border-blue-500  text-blue-500 px-4 py-2 rounded mb-2 hover:bg-primary hover:text-primary-foreground">
                    Proceed
                </button>
                <button
                    className="border border-blue-500  text-white bg-blue-600 text-primary-foreground px-4 py-2 rounded hover:bg-primary/80"
                    onClick={openSuccessModal}
                >
                    Continue editing
                </button>
            </div>
        </>
    );
};

export default MyModal;
