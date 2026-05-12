---
source_path: "documentation/AVFoundation/avplayeritem/translatesplayerinterstitialevents.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritem/translatesplayerinterstitialevents"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:translatesplayerinterstitialevents:0000:0001">translatesPlayerInterstitialEvents</span>

<span class="ko-segment" data-segment-id="seg:paragraph:translatesplayerinterstitialevents:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:translatesplayerinterstitialevents:0002:0001">플레이어가 interstitial 이벤트를 interstitial 시간 범위로 변환하는지 나타내는 Boolean 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:translatesplayerinterstitialevents:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:translatesplayerinterstitialevents:0004:0001">tvOS 15.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var translatesPlayerInterstitialEvents: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Regardless of how Picture in Picture stops, the controller calls the delegate’s <a href="avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerwillstoppictureinpicture(_:">@@TOKEN_0@@</a>.md) method.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avplayeritem/integratedtimeline.md">var integratedTimeline: AVPlayerItemIntegratedTimeline</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">예약된 interstitial 이벤트를 포함해 플레이어 항목 타이밍을 나타내는 통합 타임라인입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avplayeritem/automaticallyhandlesinterstitialevents.md">var automaticallyHandlesInterstitialEvents: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">플레이어 항목이 서버 측 지침에 따라 interstitial 이벤트를 자동으로 재생하는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[var interstitialTimeRanges: [AVInterstitialTimeRange]](avplayeritem/interstitialtimeranges.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">interstitial 콘텐츠를 식별하는 시간 범위 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avplayeritem/template.md">var template: AVPlayerItem?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/stoppictureinpicture(">View on Apple Developer</a>)*</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritem/translatesplayerinterstitialevents">View on Apple Developer</a>*</span>
