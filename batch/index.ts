import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

// 環境変数の読み込み
dotenv.config();

const supabase = createClient(
	process.env.VITE_SUPABASE_URL as string,
	process.env.VITE_SUPABASE_ANON_KEY as string,
);

async function deleteAllData() {
	try {
		// user_skillsテーブルのデータを削除
		const { error: skillsError } = await supabase
			.from("user_skills")
			.delete()
			.gt("id", -1); // 全レコードを削除するための条件

		if (skillsError) {
			console.error("Error deleting user_skills:", skillsError);
			return;
		}

		// userテーブルのデータを削除
		const { error: userError } = await supabase
			.from("users")
			.delete()
			.gt("user_id", -1); // 全レコードを削除するための条件

		if (userError) {
			console.error("Error deleting users:", userError);
			return;
		}

		console.log("All data has been successfully deleted.");
	} catch (error) {
		console.error("Error occurred:", error);
	}
}

// スクリプトの実行
deleteAllData();
