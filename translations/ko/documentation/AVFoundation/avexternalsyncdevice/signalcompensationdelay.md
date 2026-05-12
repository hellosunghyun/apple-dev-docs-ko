---
source_path: "documentation/AVFoundation/avexternalsyncdevice/signalcompensationdelay.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avexternalsyncdevice/signalcompensationdelay"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:signalcompensationdelay:0000:0001">signalCompensationDelay</span>

<span class="ko-segment" data-segment-id="seg:paragraph:signalcompensationdelay:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:signalcompensationdelay:0002:0001">프레임 캡처를 시작하기 전에 대기하는 지연 시간입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:signalcompensationdelay:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:signalcompensationdelay:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:signalcompensationdelay:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:signalcompensationdelay:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:signalcompensationdelay:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:signalcompensationdelay:0004:0005">tvOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var signalCompensationDelay: CMTime { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The size of each step depends on the receiver’s enabled <code>AVPlayerItemTrack</code> objects (see <a href="avplayeritem/tracks.md">@@TOKEN_1@@</a>).</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">Files of this type have an <code>.itt</code> extension.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">신호 보상 지연은 카메라의 readout을 프레임 내부 수준에서 오프셋하는 데 사용할 수 있습니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0001">❗ **중요**: 이 속성은 카메라가 동작 중인 프레임 지속 시간보다 작은 값으로 항상 설정해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avexternalsyncdevice/clock.md">var clock: CMClock?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">외부 동기화 장치의 시간 소스를 나타내는 clock입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avexternalsyncdevice/productid.md">var productID: UInt32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">외부 동기화 장치와 연결된 USB 제품 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avexternalsyncdevice/status.md">var status: AVExternalSyncDeviceStatus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">외부에 연결된 장치의 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avexternalsyncdevice/uuid.md">var uuid: UUID</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">외부 동기화 장치의 고유 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avexternalsyncdevice/vendorid.md">var vendorID: UInt32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">외부 동기화 장치와 연결된 USB 공급업체 식별자입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avexternalsyncdevice/signalcompensationdelay">View on Apple Developer</a>*</span>
