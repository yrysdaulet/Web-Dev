def double_char(s):
    new_s = ""
    for char in s:
        new_s += char * 2
    return new_s


def count_hi(s):
    return s.count("hi")


def cat_dog(s):
    return s.count("cat") == s.count("dog")


def count_code(s):
    count = 0
    i = 0
    while "co" in s[i:]:
        if len(s[i+2:]) >= 2 and s[i+2] == "e":
            count += 1
        i += s[i:].index("co")+3
    return count


def end_other(a, b):
    long_s, short_s = (a, b) if len(a) >= len(b) else (b, a)
    return long_s.lower().endswith(short_s.lower())


def xyz_there(s):
    i = 0
    while "xyz" in s[i:]:
        if i > 0 and s[i-1] != "." or i == 0:
            return True
        i += s[i:].index("xyz")+2
    return False
