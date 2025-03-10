using System;
using System.Collections.Generic;

class Program
{
    // Function to determine if there are any duplicates in the array
    public static bool ContainsDuplicate(int[] nums)
    {
        HashSet<int> seen = new HashSet<int>();
        foreach (int num in nums)
        {
            // If the number is already in the set, it's a duplicate
            if (!seen.Add(num))
            {
                return true;
            }
        }
        return false;
    }

    static void Main()
    {
        int[] nums1 = { 1, 2, 3, 3 };
        int[] nums2 = { 1, 2, 3, 4 };

        Console.WriteLine("Example 1:");
        Console.WriteLine($"Input: [1, 2, 3, 3]");
        Console.WriteLine($"Output: {ContainsDuplicate(nums1)}");  // Expected: true

        Console.WriteLine("\nExample 2:");
        Console.WriteLine($"Input: [1, 2, 3, 4]");
        Console.WriteLine($"Output: {ContainsDuplicate(nums2)}");  // Expected: false
    }
}

