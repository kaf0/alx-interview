#!/usr/bin/python3

"""
Minimum operations to reach H characters
"""


def minOperations(n):
    """
    Given a number n, write a method that calculates the fewest
    number of operations needed to result in exactly n H
    characters in the file.

    Args:
        n (int): The desired number of H characters

    Returns:
        int: The minimum number of operations required to obtain n H characters
    """
    if n <= 1:
        return 0

    res = 0
    i = 2

    while i <= n:
        if n % i == 0:
            res += i
            n /= i
        else:
            i += 1

    return int(res)
