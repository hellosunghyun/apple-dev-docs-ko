---
source_path: "documentation/AVKit/avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontroller-setplaying.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontroller-setplaying"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:pictureinpicturecontrollersetplaying:0000:0001">pictureInPictureController(_:setPlaying:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:pictureinpicturecontrollersetplaying:0001:0001">**Framework**: AVKit **Kind**: method **Required**: Yes</span>

<span class="ko-segment" data-segment-id="seg:paragraph:pictureinpicturecontrollersetplaying:0002:0001">Tells the delegate that the user requested to begin or pause playback.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:pictureinpicturecontrollersetplaying:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:pictureinpicturecontrollersetplaying:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:pictureinpicturecontrollersetplaying:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:pictureinpicturecontrollersetplaying:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:pictureinpicturecontrollersetplaying:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:pictureinpicturecontrollersetplaying:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:pictureinpicturecontrollersetplaying:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func pictureInPictureController(_ pictureInPictureController: AVPictureInPictureController, setPlaying playing: Bool)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>name</code>: 음성의 로컬라이즈된 이름입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>identifier</code>: 음성의 고유 식별자입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontrollertimerangeforplayback(_:">func pictureInPictureControllerTimeRangeForPlayback(AVPictureInPictureController) -&gt; CMTimeRange</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Asks the delegate for the current playable time range.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontrollerisplaybackpaused(_:">func pictureInPictureControllerIsPlaybackPaused(AVPictureInPictureController) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Asks delegate to indicate whether the playback UI reflects a playing or paused state, regardless of the current playback rate.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontroller(_:didtransitiontorendersize:">func pictureInPictureController(AVPictureInPictureController, didTransitionToRenderSize: CMVideoDimensions)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Tells the delegate when the system Picture in Picture window changes size.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontroller(_:skipbyinterval:completion:">func pictureInPictureController(AVPictureInPictureController, skipByInterval: CMTime, completion: () -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Tells the delegate that the user has requested skipping forward or backward by the indicated time interval.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontrollershouldprohibitbackgroundaudioplayback(_:">func pictureInPictureControllerShouldProhibitBackgroundAudioPlayback(AVPictureInPictureController) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Asks the delegate whether to always prohibit background audio playback.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avkit/avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontroller(_:setplaying:">View on Apple Developer</a>)*</span>
