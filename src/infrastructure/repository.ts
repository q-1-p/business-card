import { supabase } from "./supabse";
import { User } from "./user";
import { Skill } from "./skill";

export class Repository {
	getCards = async () => await supabase.from("cards").select("*");
	getCard = async (
		userId: string,
	): Promise<{ user: User | null; skill: Skill | null }> => {
		const user = await supabase
			.from("users")
			.select("*")
			.eq("user_id", userId)
			.single()
			.then((response) =>
				response.data ? new User(response.data as User) : null,
			);

		const skillId = await supabase
			.from("user_skills")
			.select("skill_id")
			.eq("user_id", userId)
			.single()
			.then((response) => (response.data?.skill_id as string) ?? null);

		if (!skillId) {
			alert("skillId is null");
			return { user, skill: null };
		}

		const skill = await supabase
			.from("skills")
			.select("*")
			.eq("id", skillId)
			.single()
			.then((response) =>
				response.data ? new Skill(response.data as Skill) : null,
			);
		return { user, skill };
	};
}
