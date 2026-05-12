---
source_path: "documentation/AVKit/avpictureinpicturecontroller/stoppictureinpicture.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/stoppictureinpicture"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:stoppictureinpicture:0000:0001">stopPictureInPicture()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stoppictureinpicture:0001:0001">**Framework**: AVKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stoppictureinpicture:0002:0001">활성화되어 있으면 Picture in Picture를 중지합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stoppictureinpicture:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:stoppictureinpicture:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:stoppictureinpicture:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:stoppictureinpicture:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:stoppictureinpicture:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:stoppictureinpicture:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:stoppictureinpicture:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func stopPictureInPicture()
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Picture in Picture가 어떤 방식으로 중지되더라도 컨트롤러는 대리자의 <a href="avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerwillstoppictureinpicture(_:">@@TOKEN_0@@</a>.md) 메서드를 호출합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">PiP 애니메이션이 완료되면 컨트롤러는 세션을 마무리하기 위해 대리자의 <a href="avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerdidstoppictureinpicture(_:">@@TOKEN_0@@</a>.md) 메서드를 호출합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avpictureinpicturecontroller/canstoppictureinpicture.md">var canStopPictureInPicture: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Picture in Picture가 활성 상태이고 중지할 수 있는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avpictureinpicturecontroller/canstartpictureinpictureautomaticallyfrominline.md">var canStartPictureInPictureAutomaticallyFromInline: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">컨트롤러가 콘텐츠를 인라인으로 임베드하고 앱이 백그라운드로 전환할 때 Picture in Picture가 자동으로 시작되는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avpictureinpicturecontroller/startpictureinpicture.md">func startPictureInPicture()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">가능하면 Picture in Picture를 시작합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/stoppictureinpicture(">View on Apple Developer</a>)*</span>
