"use client";
interface LoadingSpinnerProps {
    notext?: boolean;
}

export default function LoadingSpinner({ notext = false }: LoadingSpinnerProps) {
    return (
        <div className="container">
            <div className="lds-dual-ring">
            </div>
            {!notext && <h3>Folk Dance Practicer</h3>}
        </div>
    );
}