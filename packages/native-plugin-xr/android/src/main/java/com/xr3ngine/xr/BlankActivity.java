package com.xr3ngine.xr;

import android.app.Activity;
import android.content.Intent;
import android.media.projection.MediaProjectionManager;
import android.os.Bundle;

import static com.xr3ngine.xr.MediaProjectionHelper.mediaProjectionManager;
import static com.xr3ngine.xr.MediaProjectionHelper.mediaProjection;

public class BlankActivity extends Activity
{
    @Override
    protected void onCreate(final Bundle savedInstanceState) {
        super.onCreate(null);
        mediaProjectionManager = (MediaProjectionManager)getSystemService(MEDIA_PROJECTION_SERVICE);
        startActivityForResult(mediaProjectionManager.createScreenCaptureIntent(), 1);
    }


    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data)
    {
        if (requestCode == 1)
        {
            if (resultCode == Activity.RESULT_OK)
            {
                mediaProjection = mediaProjectionManager.getMediaProjection(resultCode, data);
                MediaProjectionHelper.resultCode = resultCode;
                MediaProjectionHelper.data = data;
                this.finish();
            }
        }
    }
}
