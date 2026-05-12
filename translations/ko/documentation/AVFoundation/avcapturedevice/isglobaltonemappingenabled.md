---
source_path: "documentation/AVFoundation/avcapturedevice/isglobaltonemappingenabled.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/isglobaltonemappingenabled"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:isglobaltonemappingenabled:0000:0001">isGlobalToneMappingEnabled</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isglobaltonemappingenabled:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isglobaltonemappingenabled:0002:0001">A Boolean value that indicates whether the device should use global tone mapping.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isglobaltonemappingenabled:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:isglobaltonemappingenabled:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isglobaltonemappingenabled:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isglobaltonemappingenabled:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isglobaltonemappingenabled:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isGlobalToneMappingEnabled: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">톤 매핑은 HDR 이미지의 픽셀 레벨을 더 낮은 동적 범위(예: 16비트에서 8비트로 매핑)로 매핑하면서도 원본 이미지와 가능한 한 유사한 모양을 유지하는 데 사용되는 기술입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">일반적으로 활성 카메라는 적응형 로컬 톤 커브를 사용해 최고 이미지 품질을 유지하고 조명 조건이 바뀌면 빠르게 적응합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 속성 값이 true이면 톤 매핑이 현재 장면에 따라 동적으로 조정되며 이미지의 모든 픽셀에 적용됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">이 설정은 장치의 활성 형식의 <a href="avcapturedevice/format/isglobaltonemappingsupported.md">@@TOKEN_0@@</a> 속성이 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_1@@</a>를 반환하는 경우에만 활성화할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">기본값인 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_0@@</a>로 설정된 경우 프레임워크는 이미지의 서로 다른 픽셀에 서로 다른 톤 매핑을 적용할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 속성은 다음 조건에서 기본값 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_0@@</a>로 재설정됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:discussion:0011:0001">기기의 활성 형식을 변경합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0011:0002">기기 입력을 세션에 추가합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0011:0003">캡처 세션의 프리셋 값을 변경합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">이 속성은 키-값 관찰(KVO)로 값의 자동 변경 사항을 확인할 수 있습니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0013:0001">**Note**: 전역 톤 매핑을 활성화하면 기기 입력이 연결된 세션의 <a href="avcapturephotooutput.md">@@TOKEN_0@@</a> 객체가 모든 형태의 정지 이미지 퓨전을 비활성화하여 정지 이미지에 자동 안정화가 적용되지 않습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/isglobaltonemappingenabled">View on Apple Developer</a>*</span>
