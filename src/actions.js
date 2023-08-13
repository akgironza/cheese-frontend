import { redirect } from "react-router-dom";
import { baseUrl } from "./baseURL";

export const createAction = async ({ request }) => {
    // Get data from form
    const formData = await request.formData()
    // Set up new cheese to match schema
    const newCheese = {
        name: formData.get("name"),
        countryOfOrigin: formData.get("countryOfOrigin"),
        image: formData.get("image")
    }
    // Send new cheese to API
    await fetch(`${baseUrl}/cheese`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newCheese),
    })
    // Redirect to Index
    return redirect("/")
}