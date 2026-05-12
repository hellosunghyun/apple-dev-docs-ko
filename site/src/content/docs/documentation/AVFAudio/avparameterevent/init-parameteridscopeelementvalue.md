---
source_path: "documentation/AVFAudio/avparameterevent/init-parameteridscopeelementvalue.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avparameterevent/init-parameteridscopeelementvalue"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initparameteridscopeelementvalue:0000:0001">init(parameterID:scope:element:value:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initparameteridscopeelementvalue:0001:0001">**Framework**: AVFAudio **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initparameteridscopeelementvalue:0002:0001">매개변수 식별자, scope, 요소 및 설정할 매개변수 값으로 이벤트를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initparameteridscopeelementvalue:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initparameteridscopeelementvalue:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initparameteridscopeelementvalue:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initparameteridscopeelementvalue:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initparameteridscopeelementvalue:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initparameteridscopeelementvalue:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initparameteridscopeelementvalue:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(parameterID: UInt32, scope: UInt32, element: UInt32, value: Float)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">매개변수에 대한 자세한 내용은 <a href="https://developer.apple.com/documentation/AudioToolbox/AudioUnitParameterID">@@TOKEN_0@@</a>, <a href="https://developer.apple.com/documentation/AudioToolbox/AudioUnitScope">@@TOKEN_1@@</a>, <a href="https://developer.apple.com/documentation/AudioToolbox/AudioUnitElement">@@TOKEN_2@@</a>를 참조해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">유효한 값의 범위는 설정한 매개변수에 따라 달라집니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>parameterID</code>: 매개변수의 식별자입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>scope</code>: 매개변수의 오디오 유닛 스코프입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>element</code>: 스코프 내 요소 인덱스입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0004"><code>value</code>: 설정할 매개변수 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0012:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avparameterevent/init(parameterid:scope:element:value:">View on Apple Developer</a>)*</span>
