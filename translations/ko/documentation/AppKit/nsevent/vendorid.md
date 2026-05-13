---
source_path: "documentation/AppKit/nsevent/vendorid.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nsevent/vendorid"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vendorid:0000:0001">vendorID</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vendorid:0001:0001">**Framework**: AppKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vendorid:0002:0001">해당 이벤트와 연결된 태블릿의 벤더 식별자입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vendorid:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vendorid:0004:0001">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var vendorID: Int { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">태블릿은 일반적으로 USB 장치입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 메서드는 하위 유형이 <code>NSTabletProximityEventSubtype</code>인 마우스 이벤트와 <code>NSTabletProximity</code> 이벤트에서만 유효합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="nsevent/capabilitymask.md">var capabilityMask: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">이벤트를 생성한 태블릿 장치의 기능을 나타내는 마스크입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="nsevent/deviceid.md">var deviceID: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">시스템이 태블릿 포인터 및 태블릿 근접 이벤트와 대조하기 위해 사용하는 특수 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="nsevent/isenteringproximity.md">var isEnteringProximity: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">포인팅 장치가 태블릿의 근접 범위를 진입했는지 이탈했는지를 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="nsevent/pointingdeviceid.md">var pointingDeviceID: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">현재 태블릿과 근접 상태인 포인팅 장치의 인덱스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="nsevent/pointingdeviceserialnumber.md">var pointingDeviceSerialNumber: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">이벤트를 생성한 포인팅 장치의 벤더 지정 일련 번호입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="nsevent/pointingdevicetype-swift.property.md">var pointingDeviceType: NSEvent.PointingDeviceType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">이 이벤트와 연관된 포인팅 장치의 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="nsevent/pointingdevicetype-swift.enum.md">NSEvent.PointingDeviceType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">태블릿 근접 이벤트 또는 근접 이벤트 하위 유형이 있는 마우스 이벤트의 포인팅 장치 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="nsevent/systemtabletid.md">var systemTabletID: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">시스템에 연결된 태블릿 장치의 인덱스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="nsevent/tabletid.md">var tabletID: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">이 이벤트와 연결된 태블릿 장치의 USB 모델 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="nsevent/uniqueid.md">var uniqueID: UInt64</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">이 이벤트를 생성한 포인팅 장치의 고유 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="nsevent/vendorpointingdevicetype.md">var vendorPointingDeviceType: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">이벤트와 관련된 포인팅 장치(벤더 선택 내)의 유형을 나타내는 코드화된 비트 필드입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">*<a href="https://developer.apple.com/documentation/appkit/nsevent/vendorid">View on Apple Developer</a>*</span>
