---
source_path: "documentation/AVKit/avpictureinpicturecontroller/ispictureinpicturesuspended.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/ispictureinpicturesuspended"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:ispictureinpicturesuspended:0000:0001">isPictureInPictureSuspended</span>

<span class="ko-segment" data-segment-id="seg:paragraph:ispictureinpicturesuspended:0001:0001">**Framework**: AVKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:ispictureinpicturesuspended:0002:0001">A Boolean value that indicates whether the system suspends the controller’s Picture in Picture window.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:ispictureinpicturesuspended:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:ispictureinpicturesuspended:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:ispictureinpicturesuspended:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:ispictureinpicturesuspended:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:ispictureinpicturesuspended:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:ispictureinpicturesuspended:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:ispictureinpicturesuspended:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isPictureInPictureSuspended: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The system suspends your app’s Picture in Picture session when another app, typically FaceTime, is using the feature.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">모든 관절과 해당 부모 관절에 대해 선을 그리면 기본 골격을 시각화할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">부모가 없는 관절은 루트 관절로 표시됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avpictureinpicturecontroller/ispictureinpicturesupported.md">class func isPictureInPictureSupported() -&gt; Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Returns a Boolean value that indicates whether the current device supports Picture in Picture.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avpictureinpicturecontroller/ispictureinpicturepossible.md">var isPictureInPicturePossible: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">A Boolean value that indicates whether Picture in Picture playback is currently possible.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avpictureinpicturecontroller/ispictureinpictureactive.md">var isPictureInPictureActive: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">ARKit가 카메라 피드에서 인식한 사람의 화면 공간 표현입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/ispictureinpicturesuspended">View on Apple Developer</a>*</span>
