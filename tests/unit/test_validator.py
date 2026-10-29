import unittest
import os
import subprocess

REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))

class TestArchitectureValidator(unittest.TestCase):
    def test_validator_script_passes(self):
        script = os.path.join(REPO_ROOT, "scripts", "validate-architecture.py")
        res = subprocess.run(["python3", script], capture_output=True, text=True)
        self.assertEqual(res.returncode, 0, f"Validator failed with output:\n{res.stdout}\n{res.stderr}")

    def test_drift_check_script_passes(self):
        script = os.path.join(REPO_ROOT, "scripts", "check-instruction-drift.py")
        res = subprocess.run(["python3", script], capture_output=True, text=True)
        self.assertEqual(res.returncode, 0, f"Drift check failed with output:\n{res.stdout}\n{res.stderr}")

if __name__ == '__main__':
    unittest.main()
