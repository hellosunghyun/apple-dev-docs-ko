---
source_path: "documentation/AVFoundation/avcapturedevice/activedepthdataminframeduration.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/activedepthdataminframeduration"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:activedepthdataminframeduration:0000:0001">activeDepthDataMinFrameDuration</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activedepthdataminframeduration:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activedepthdataminframeduration:0002:0001">깊이 데이터의 최소 프레임 지속 시간입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activedepthdataminframeduration:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:activedepthdataminframeduration:0004:0001">iOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activedepthdataminframeduration:0004:0002">iPadOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activedepthdataminframeduration:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activedepthdataminframeduration:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var activeDepthDataMinFrameDuration: CMTime { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성은 시스템이 깊이 데이터를 생성하는 프레임 속도의 상한을 설정할 때 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">깊이 데이터 프레임 속도를 낮추면 일반적으로 전력 소비가 감소하여 카메라가 시스템 압력 상태가 높아지기 전까지 더 오래 동작합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">활성 깊이 데이터 형식이 지원하는 프레임 속도 범위를 벗어난 값을 설정하면 예외가 발생합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 속성을 <a href="https://developer.apple.com/documentation/CoreMedia/CMTime/invalid">@@TOKEN_0@@</a>로 설정하면 활성 깊이 데이터 형식의 기본 최소 프레임 지속 시간으로 재설정됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">이 속성을 <a href="https://developer.apple.com/documentation/CoreMedia/CMTime/positiveInfinity">@@TOKEN_0@@</a>로 설정하면 깊이 데이터 프레임 속도가 <code>0</code>이 됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 값은 활성 비디오 형식 또는 활성 깊이 데이터 형식이 변경될 때마다 재설정됩니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0001">❗ **중요**: 이 속성의 값을 변경하기 전에 장치의 구성 속성에 대한 독점 접근 권한을 얻으려면 <a href="avcapturedevice/lockforconfiguration(">@@TOKEN_0@@</a>.md) 를 호출해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0002">반대로 이 속성의 값을 설정하면 예외가 발생합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0003">장치 설정이 끝나면 <a href="avcapturedevice/unlockforconfiguration(">@@TOKEN_0@@</a>.md)을 호출해 잠금을 해제합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcapturedevice/activevideominframeduration.md">var activeVideoMinFrameDuration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">현재 활성화된 최소 프레임 지속 시간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcapturedevice/activevideomaxframeduration.md">var activeVideoMaxFrameDuration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">현재 활성화된 최대 프레임 지속 시간입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/activedepthdataminframeduration">View on Apple Developer</a>*</span>
