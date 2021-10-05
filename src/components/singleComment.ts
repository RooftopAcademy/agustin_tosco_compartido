export default function singleComment (comment: any) : string {

    let name = comment.email.slice(0, comment.email.indexOf("@"));

    return `
            <h2>${name}</h2>
            <ul>
                <li>${comment.body}</li>
            </ul>
            `
}