#include "best_travel.h"

int main(int argc, char **argv) {
    t_input    input;
    int             max_distance;

    if (!is_input_valid(argc, argv, &input))
        return (-1);
    max_distance = choose_best_sum(&input);
    display_results(max_distance);
    free(input.list_of_distances);
    return (0);
}
