def sleep_in(is_weekday, is_vacation):
    return not is_weekday or is_vacation


def monkey_trouble(a_smile, b_smile):
    return a_smile == b_smile


def sum_double(a, b):
    return 2 * (a + b) if a == b else a + b


def diff21(n):
    return 2 * abs(21 - n) if n > 21 else abs(21 - n)


def parrot_trouble(talking, hour):
    return talking and (hour < 7 or hour > 20)


def makes10(a, b):
    return a == 10 or b == 10 or a + b == 10


def near_hundred(n):
    return abs(100 - n) <= 10 or abs(200 - n) <= 10


def pos_neg(a, b, negative):
    return (a < 0 and b > 0 or a > 0 and b < 0) if not negative else a < 0 and b < 0


def not_string(str):
    return str if str.startswith("not") else "not " + str


def missing_char(str, n):
    return str[:n] + str[n+1:]


def front_back(str):
    return str[-1] + str[1:-1] + str[0] if len(str) > 1 else str


def front3(str):
    return str[:3] * 3 if len(str) > 3 else str * 3
