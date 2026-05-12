---
source_path: "documentation/AVKit/avplayerviewpictureinpicturedelegate/playerview-failedtostartpictureinpicturewitherror.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avplayerviewpictureinpicturedelegate/playerview-failedtostartpictureinpicturewitherror"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:playerviewfailedtostartpictureinpicturewitherror:0000:0001">playerView(_:failedToStartPictureInPictureWithError:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:playerviewfailedtostartpictureinpicturewitherror:0001:0001">**Framework**: AVKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:playerviewfailedtostartpictureinpicturewitherror:0002:0001">Picture in Picture 재생 시작이 실패했음을 delegate에 알립니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:playerviewfailedtostartpictureinpicturewitherror:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:playerviewfailedtostartpictureinpicturewitherror:0004:0001">macOS 10.15+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func playerView(_ playerView: AVPlayerView, failedToStartPictureInPictureWithError error: any Error)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>playerView</code>: 플레이어 뷰입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>error</code>: 실패를 설명하는 오류 객체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avplayerviewpictureinpicturedelegate/playerviewwillstartpicture(inpicture:">func playerViewWillStartPicture(inPicture: AVPlayerView)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Picture in Picture 재생이 시작되기 전임을 delegate에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avplayerviewpictureinpicturedelegate/playerviewdidstartpicture(inpicture:">func playerViewDidStartPicture(inPicture: AVPlayerView)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Picture in Picture 재생이 시작되었음을 delegate에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avplayerviewpictureinpicturedelegate/playerviewwillstoppicture(inpicture:">func playerViewWillStopPicture(inPicture: AVPlayerView)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Picture in Picture 재생이 곧 중지될 것임을 delegate에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avplayerviewpictureinpicturedelegate/playerviewdidstoppicture(inpicture:">func playerViewDidStopPicture(inPicture: AVPlayerView)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Picture in Picture 재생이 중지되었음을 delegate에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avplayerviewpictureinpicturedelegate/playerview(_:restoreuserinterfaceforpictureinpicturestopwithcompletionhandler:">func playerView(AVPlayerView, restoreUserInterfaceForPictureInPictureStopWithCompletionHandler: (Bool) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Picture in Picture 재생이 중지되기 전에 사용자 인터페이스를 복원하도록 delegate에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avplayerviewpictureinpicturedelegate/playerviewshouldautomaticallydismissatpicture(inpicturestart:">func playerViewShouldAutomaticallyDismissAtPicture(inPictureStart: AVPlayerView) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Picture in Picture가 시작될 때 플레이어 뷰를 미니어처화할지 delegate에 문의합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avkit/avplayerviewpictureinpicturedelegate/playerview(_:failedtostartpictureinpicturewitherror:">Apple Developer에서 보기</a>)*</span>
