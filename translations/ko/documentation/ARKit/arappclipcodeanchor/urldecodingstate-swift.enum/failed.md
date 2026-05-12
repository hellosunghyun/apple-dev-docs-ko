---
source_path: "documentation/ARKit/arappclipcodeanchor/urldecodingstate-swift.enum/failed.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arappclipcodeanchor/urldecodingstate-swift.enum/failed"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:arappclipcodeanchorurldecodingstatefailed:0000:0001">ARAppClipCodeAnchor.URLDecodingState.failed</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arappclipcodeanchorurldecodingstatefailed:0001:0001">**Framework**: ARKit **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arappclipcodeanchorurldecodingstatefailed:0002:0001">App Clip Code의 URL 디코딩 실패를 나타내는 상태입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arappclipcodeanchorurldecodingstatefailed:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:arappclipcodeanchorurldecodingstatefailed:0004:0001">iOS 14.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:arappclipcodeanchorurldecodingstatefailed:0004:0002">iPadOS 14.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:arappclipcodeanchorurldecodingstatefailed:0004:0003">Mac Catalyst 14.3+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case failed
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">다음 상황에서 App Clip Code URL의 디코딩이 실패합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:discussion:0009:0001">전체 앱 또는 App Clip의 코드 서명에 associated-domains 엔타이틀먼트가 없습니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0009:0002">App Clip Code URL이 식별한 리소스의 호스트에서 Apple App Site Association(AASA) 파일을 제공하지 않습니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0009:0003">App Clip Code URL의 도메인에서 호스팅되는 AASA 파일에 App Clip의 fully-qualified application identifier가 없습니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0009:0004">App Clip Code는 App Store Connect의 App Clip 경험에서 App Clip과 연결되어 있지 않습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">자세한 내용은 <a href="https://developer.apple.com/documentation/AppClip/configuring-the-launch-experience-of-your-app-clip">@@TOKEN_0@@</a>를 참조합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="arappclipcodeanchor/urldecodingstate-swift.enum/decoded.md">ARAppClipCodeAnchor.URLDecodingState.decoded</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">App Clip Code URL의 디코딩이 완료됨을 나타내는 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="arappclipcodeanchor/urldecodingstate-swift.enum/decoding.md">ARAppClipCodeAnchor.URLDecodingState.decoding</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">App Clip Code URL 디코딩이 진행 중임을 나타내는 상태입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/arkit/arappclipcodeanchor/urldecodingstate-swift.enum/failed">View on Apple Developer</a>*</span>
