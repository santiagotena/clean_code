#include "best_travel.h"

char **split(char *str, const char *delim, int *count) {
    char *copy = strdup(str);
    char **tokens = NULL;
    char *token = strtok(copy, delim);
    *count = 0;

    while (token != NULL) {
        (*count)++;
        tokens = realloc(tokens, sizeof(char*) * (*count));
        tokens[(*count) - 1] = strdup(token);
        token = strtok(NULL, delim);
    }

    free(copy);
    return tokens;
}

void free_tokens(char** tokens, int count) {
    for (int i = 0; i < count; i++) {
        free(tokens[i]);
    }
    free(tokens);
}


bool    is_input_valid(int argc, char **argv, t_parameters *parameters) {
    if (argc < 4) {
        printf("%s%s", ERR_INVALID_ARGC, VALID_INPUT_EXAMPLE);
        return (false);
    }

    parameters->maximum_sum_of_distances = atoi(argv[1]);
    if (parameters->maximum_sum_of_distances < 0) {
        printf("%s%s", ERR_INVALID_MAX_DISTANCE, VALID_INPUT_EXAMPLE);
        return (false);
    }

    parameters->number_of_towns_to_visit = atoi(argv[2]);
    if(parameters->number_of_towns_to_visit < 1) {
        printf("%s%s", ERR_INVALID_TOWN_NUMBER, VALID_INPUT_EXAMPLE);
        return (false);
    }

    int count;
    char **tokens = split(argv[3], ", ", &count);
    for (int i = 0; i < count; i++) {
        parameters->list_of_distances[i] = atoi(tokens[i]);
    }
    free_tokens(tokens, count);
    if (parameters->list_of_distances == NULL){
        printf("%s%s", ERR_INVALID_LIST, VALID_INPUT_EXAMPLE);
        return (false);
    }
    for (int i = 0; i < count; i++) {
        if (parameters->list_of_distances[i] < 0) {
            printf("%s%s", ERR_INVALID_LIST, VALID_INPUT_EXAMPLE);
            return (false);
        }
    }

    return (true);
}