#include "best_travel.h"

int main(int argc, char **argv) {
    t_input         input;
    int             highest_distance;

    if (!is_input_valid(argc, argv, &input))
        return (-1);
    highest_distance = choose_best_sum(&input);
    display_results(highest_distance);
    free(input.distances);
    return (0);
}
