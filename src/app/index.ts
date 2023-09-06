import chalk from "chalk";
import Generator from "yeoman-generator";
import yosay from "yosay";

export default class extends Generator {
	props: unknown;

	async prompting(): Promise<void> {
		// Have Yeoman greet the user.npm
		this.log(yosay(`Welcome to the prime ${chalk.red("generator-roblox")} generator!`));

		const prompts = [
			{
				type: "confirm",
				name: "someAnswer",
				message: "Would you like to enable this option?",
				default: true,
			},
		];

		const props = await this.prompt(prompts);
		// To access props later use this.props.someAnswer;
		this.props = props;
	}

	writing(): void {
		this.fs.copy(this.templatePath("dummyfile.txt"), this.destinationPath("dummyfile.txt"));
	}

	install(): void {
		// this.installDependencies();
	}
}
