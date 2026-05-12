---
source_path: "documentation/AVFoundation/avdisplaycriteria.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avdisplaycriteria"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avdisplaycriteria:0000:0001">AVDisplayCriteria</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avdisplaycriteria:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avdisplaycriteria:0002:0001">tvOS에서 표시 모드 선택을 안내하는 데 시스템이 사용하는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avdisplaycriteria:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avdisplaycriteria:0004:0001">tvOS 11.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:avdisplaycriteria:0004:0002">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVDisplayCriteria
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">In tvOS에서 이 객체는 <code>[</code>AVDisplayManager`](https://developer.apple.com/documentation/AVKit/AVDisplayManager) 가 동영상 자산을 표시할 때 HDR로 전환하는 등 적절한 표시 모드를 설정하는 데 사용하는 display criteria를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">앱이 플레이어 사용자 인터페이스로 <a href="https://developer.apple.com/documentation/AVKit/AVPlayerViewController">@@TOKEN_0@@</a>를 사용하는 경우, 시스템은 자산을 표시할 때 display criteria를 자동으로 적용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0003">커스텀 플레이어 인터페이스를 사용하는 경우, 자산의 <a href="avpartialasyncproperty/preferreddisplaycriteria.md">@@TOKEN_0@@</a> 속성 값을 로드해 창의 <a href="https://developer.apple.com/documentation/UIKit/UIWindow/avDisplayManager">@@TOKEN_1@@</a> 객체에 설정합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0009:0001">❗ **중요**: 대부분의 앱은 이 클래스의 인스턴스를 생성하지 않고 미디어 자산에서 선호 표시 기준을 가져옵니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0009:0002">앱에서 <a href="avasset.md">@@TOKEN_0@@</a>을 사용하지 않는 경우(예: <a href="avsamplebufferdisplaylayer.md">@@TOKEN_1@@</a>로 샘플 버퍼를 렌더링하는 스트리밍 앱)는 <a href="avdisplaycriteria/init(refreshrate:formatdescription:">@@TOKEN_2@@</a>.md) 이니셜라이저를 사용해 인스턴스를 수동으로 생성할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0010:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:create-a-display-criteria:0011:0001">Display criteria 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:create-a-display-criteria:0012:0001"><a href="avdisplaycriteria/init(refreshrate:formatdescription:">init(refreshRate: Float, formatDescription: CMFormatDescription)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:create-a-display-criteria:0013:0001">지정된 새로고침 속도와 형식 설명이 있는 display criteria 객체를 생성합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0014:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0015:0001">상속 대상</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0016:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0017:0001">채택</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0018:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0018:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0018:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0018:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0018:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0018:0006"><a href="../Foundation/NSCopying.md">NSCopying</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0018:0007"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0018:0008"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0018:0009"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0019:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avpartialasyncproperty/preferredrate.md">static var preferredRate: AVAsyncProperty&lt;Root, Float&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">자산의 미디어 재생 속도 선호도입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avpartialasyncproperty/preferredvolume-20mb3.md">static var preferredVolume: AVAsyncProperty&lt;Root, Float&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">자산의 청취 가능한 미디어 재생 볼륨 선호도입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avpartialasyncproperty/preferredtransform-80d13.md">static var preferredTransform: AVAsyncProperty&lt;Root, CGAffineTransform&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">표시 또는 처리 중 시각 콘텐츠에 적용할 자산의 변환 선호도입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avpartialasyncproperty/preferreddisplaycriteria.md">static var preferredDisplayCriteria: AVAsyncProperty&lt;Root, AVDisplayCriteria&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">콘텐츠 최적 재생을 위한 자산의 표시 모드 선호도입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avdisplaycriteria">View on Apple Developer</a>*</span>
