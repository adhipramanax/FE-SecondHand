import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    .modal-content {
        width: 350px;
        background-color: #ffffff;
        border-radius: 16px;
    }
`;

const Index = ({ children }) => {
    return (
        <>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <Wrapper>
                        <div class="modal-content">
                            <div class="d-flex justify-content-end me-4 mt-4">
                                <button type="button" class="btn-close justify-content-end" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">{children}</div>
                        </div>
                    </Wrapper>
                </div>
            </div>
        </>
    );
};

export default Index;
