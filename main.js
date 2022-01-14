const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/soot-jump-long.png");
ASSET_MANAGER.queueDownload("./sprites/soot-jump-long_aura.png");
ASSET_MANAGER.queueDownload("./sprites/soot-jump-long_aura2.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	//ctx.imageSmoothingEnabled = false;

	gameEngine.init(ctx);

	gameEngine.addEntity(new Soot(gameEngine, 0, 0));

	gameEngine.start();
});
