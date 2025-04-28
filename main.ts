
import com.badlogic.gdx.ApplicationAdapter;
import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.PerspectiveCamera;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.graphics.Mesh;
import com.badlogic.gdx.graphics.VertexAttribute;
import com.badlogic.gdx.graphics.VertexAttributes;
import com.badlogic.gdx.graphics.Color;
import com.badlogic.gdx.graphics.glutils.ShapeRenderer;

public class My3DGame extends ApplicationAdapter {
    private PerspectiveCamera camera;
    private ShapeRenderer shapeRenderer;

    @Override
    public void create() {
        // Set up the camera
        camera = new PerspectiveCamera(67, Gdx.graphics.getWidth(), Gdx.graphics.getHeight());
        camera.position.set(0f, 0f, 5f);
        camera.lookAt(0f, 0f, 0f);
        camera.near = 1f;
        camera.far = 300f;
        camera.update();

        // Set up the renderer
        shapeRenderer = new ShapeRenderer();
    }

    @Override
    public void render() {
        // Clear the screen with a background color
        Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT | GL20.GL_DEPTH_BUFFER_BIT);
        shapeRenderer.setProjectionMatrix(camera.combined);

        // Begin rendering 3D objects
        shapeRenderer.begin(ShapeRenderer.ShapeType.Filled);
        shapeRenderer.setColor(Color.RED);

        // Draw a 3D cube at the origin (center of the world)
        shapeRenderer.box(-1f, -1f, -1f, 2f, 2f, 2f); // x, y, z, width, height, depth
        shapeRenderer.end();
    }

    @Override
    public void resize(int width, int height) {
        camera.viewportWidth = width;
        camera.viewportHeight = height;
        camera.update();
    }

    @Override
    public void pause() {
    }

    @Override
    public void resume() {
    }

    @Override
    public void dispose() {
        shapeRenderer.dispose();
    }
}
if (Gdx.input.isKeyPressed(Keys.W)) {
    camera.position.add(0f, 0f, -0.1f); // Move camera forward
}
if (Gdx.input.isKeyPressed(Keys.S)) {
    camera.position.add(0f, 0f, 0.1f); // Move camera backward
}
if (Gdx.input.isKeyPressed(Keys.A)) {
    camera.position.add(-0.1f, 0f, 0f); // Move camera left
}
if (Gdx.input.isKeyPressed(Keys.D)) {
    camera.position.add(0.1f, 0f, 0f); // Move camera right
}
