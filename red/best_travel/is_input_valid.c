#include "best_travel.h"

bool    is_input_valid(int argc, char **argv) {
    if (argc < 4) {
        printf("%s%s", ERR_INVALID_ARGC, VALID_INPUT_EXAMPLE);
        return (false);
    }



    return (true);
}