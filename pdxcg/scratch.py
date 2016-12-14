def open_file():
    words = []
    with open('nasa.txt', 'r') as file:
        for line in file:
            line = line.rstrip().replace('\\n', '\n')
            line_words = line.split()
            for w in line_words:
                words.append(w)
    return words
print(open_file())