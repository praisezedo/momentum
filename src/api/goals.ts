const API_BASE_URL = "/api";
import  type {Goal , UpdateGoalInput , CreateGoalInput} from "../types/goal";

async function handleResponse<T>(response: Response): Promise<T> {
      if (!response.ok) {
        throw new Error(`Request Failed: ${response.status}`);
      }

      return response.json() as Promise<T>;
}

export async function getGoals(): Promise<Goal[]> {
    const response = await fetch(`${API_BASE_URL}/goals`);
    return handleResponse<Goal[]>(response);
}

export async function createGoal(input: CreateGoalInput): Promise<Goal> {
   const response = await fetch(`${API_BASE_URL}/goals`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(input)
   })

   return handleResponse(response)
}

export async function updateGoal(id: string, input: UpdateGoalInput): Promise<Goal> {
    const res = await fetch(`${API_BASE_URL}/goals/${id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(input)
    })

    return handleResponse(res);
};

export async function deleteGoal(id: string): Promise<void> {
    const res = await fetch(`${API_BASE_URL}/goals/${id}`, {
        method: "DELETE",
    })
    await handleResponse(res);
}