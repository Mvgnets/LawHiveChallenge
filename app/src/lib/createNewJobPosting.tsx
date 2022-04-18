import axios from "axios";

export default function createNewJobPosting(title: string, description: string, feeStructure: string, feeAmount: number) {
    axios.post('http://localhost:4000/job-postings', {
        title,
        description,
        feeStructure,
        feeAmount,
        state: "Started"
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}