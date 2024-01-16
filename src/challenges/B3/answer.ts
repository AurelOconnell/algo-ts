/**
 * In this challenge, you must find and attach to each group the group (or groups)
 * with which the current group has the most skills in common. 
 * Attached groups must be sorted by their name (A to Z).
 * You must not change the order of the main list of groups.
 * 
 * @param groups List of groups without closestGroups
 * @returns The same list but with a new closestGroups prop on each
 */

import { close } from "fs";

// ↓ uncomment bellow lines and add your response!

export default function ({ groups }: { groups: GroupWithSkills[] }): GroupWithSkillsAndClosestGroups[] {
  const result: GroupWithSkillsAndClosestGroups[] = [];

  // Helper function to calculate the common skills between two groups
  const calculateCommonSkills = (groupA: GroupWithSkills, groupB: GroupWithSkills): string[] => {
    return groupA.skills.filter(skill => groupB.skills.includes(skill));
  };

  // Iterate through each group
  for (const currentGroup of groups) {
    // Find closest groups based on common skills
    const closestGroups = groups
      .filter(group => group !== currentGroup) // Exclude the current group
      .sort((a, b) => a.name.localeCompare(b.name)) // Sort groups by name (A to Z)
      .reduce((closest, otherGroup) => {
        const commonSkills = calculateCommonSkills(currentGroup, otherGroup);

        // Update closestGroups if the common skills are greater than the current closest
        if (commonSkills.length > closest.commonSkills.length) {
          return { commonSkills, groups: [otherGroup] };
        } else if (commonSkills.length === closest.commonSkills.length) {
          // If equal, add the group to the list
          closest.groups.push(otherGroup);
        }
        return closest;
      }, { commonSkills: [] as string[], groups: [] as GroupWithSkills[] });

    // Attach closestGroups to the current group
    result.push({
      ...currentGroup,
      closestGroups: closestGroups.groups,
    });
  }

  return result;
}

// used interfaces, do not touch
export interface GroupWithSkills {
    name: string;
    skills: string[];
}

export interface GroupWithSkillsAndClosestGroups extends GroupWithSkills {
    closestGroups: GroupWithSkills[];
}
