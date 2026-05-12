---
source_path: "documentation/AVKit/avpictureinpicturecontroller/contentsource-swift.class/activevideocallsourceview.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/contentsource-swift.class/activevideocallsourceview"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:activevideocallsourceview:0000:0001">activeVideoCallSourceView</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activevideocallsourceview:0001:0001">**Framework**: AVKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activevideocallsourceview:0002:0001">통화의 비디오 콘텐츠를 포함하는 뷰입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activevideocallsourceview:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:activevideocallsourceview:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activevideocallsourceview:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activevideocallsourceview:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activevideocallsourceview:0004:0004">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
weak var activeVideoCallSourceView: UIView? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">컨트롤러는 앱이 백그라운드로 전환될 때 이 뷰의 레이아웃 프레임과 가시성을 사용해 Picture in Picture가 자동으로 시작되는지 여부를 결정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 뷰의 레이아웃 프레임은 Picture in Picture 진입 및 종료 시 애니메이션에도 영향을 미칩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참조 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avpictureinpicturecontroller/contentsource-swift.class/activevideocallcontentviewcontroller.md">var activeVideoCallContentViewController: AVPictureInPictureVideoCallViewController</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">영상 통화 콘텐츠를 표시하는 뷰 컨트롤러입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avpictureinpicturevideocallviewcontroller.md">class AVPictureInPictureVideoCallViewController</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Picture in Picture에서 영상 통화 콘텐츠를 표시하는 뷰 컨트롤러입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/contentsource-swift.class/activevideocallsourceview">View on Apple Developer</a>*</span>
