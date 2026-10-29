import unittest
import os
import shutil
import subprocess

REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))

class TestScaffolder(unittest.TestCase):
    def setUp(self):
        self.test_name = "test-temp-app"
        self.target_dir = os.path.join(REPO_ROOT, "projects", self.test_name)
        if os.path.exists(self.target_dir):
            shutil.rmtree(self.target_dir)

    def tearDown(self):
        if os.path.exists(self.target_dir):
            shutil.rmtree(self.target_dir)

    def test_scaffold_api_service(self):
        script = os.path.join(REPO_ROOT, "scripts", "scaffold-project.py")
        res = subprocess.run(["python3", script, "--type", "api-service", "--name", self.test_name], capture_output=True, text=True)
        self.assertEqual(res.returncode, 0)
        self.assertTrue(os.path.exists(os.path.join(self.target_dir, "src", "routes.ts")))
        self.assertTrue(os.path.exists(os.path.join(self.target_dir, "README.md")))

if __name__ == '__main__':
    unittest.main()
