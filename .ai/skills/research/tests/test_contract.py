import unittest
import os

class TestResearchSkill(unittest.TestCase):
    def test_skill_manifest_exists(self):
        p = os.path.join(os.path.dirname(__file__), "..", "SKILL.md")
        self.assertTrue(os.path.exists(p), "SKILL.md must exist")
        with open(p, "r", encoding="utf-8") as f:
            content = f.read()
        self.assertIn("name: research", content)
        self.assertIn("description:", content)

if __name__ == '__main__':
    unittest.main()
