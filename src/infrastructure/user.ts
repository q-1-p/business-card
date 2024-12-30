export class User {
	user_id: string;
	name: string;
	description: string;
	github_id: string | null;
	qiita_id: string | null;
	x_id: string | null;

	constructor(user: User) {
		this.user_id = user.user_id;
		this.name = user.name;
		this.description = user.description;
		this.github_id = user.github_id;
		this.qiita_id = user.qiita_id;
		this.x_id = user.x_id;
	}

	public githubUrl() {
		return `https://github.com/${this.github_id}`;
	}

	public qiitaUrl() {
		return `https://qiita.com/${this.qiita_id}`;
	}

	public xUrl() {
		return `https://x.com/${this.x_id}`;
	}
}
