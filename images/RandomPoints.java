/******************************************************************************
 *  Nafn    :
 *  T-póstur:
 *
 *  Lýsing  : Teiknar punkta sem eru dreifðir samkvæmt Gauss dreifingu.
 *  Fjöldi teiknaðra punkta er fenginn úr viðfangsbreytu
 *
 *
 *****************************************************************************/

public class RandomPoints {
    public static void main(String args[]) {
        int N = Integer.parseInt(args[0]);
        StdDraw.enableDoubleBuffering();
        for (int i = 0; i < N; i++) {
            double x = StdRandom.gaussian(0.5, 0.2);
            double y = StdRandom.gaussian(0.5, 0.2);
            StdDraw.point(x, y);
            if (i % 100 == 0) StdDraw.show();
        }
    }
}
